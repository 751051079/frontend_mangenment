import React, { useState, useEffect,useCallback } from 'react';
import { Form, Input, Button, Table, Modal, message } from 'antd';
import { useParams } from 'react-router-dom';
import { FormOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { createStep, getStepAll, updateStepById, removeStepById } from "@/api/steps"
import ImageUploader from '@/component/ImageUploader/ImageUploader';
import { Step } from "@/utils/type"

const RecipeSteps: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [step, setStep] = useState<Step[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingStep, setEditingStep] = useState<Step | null>(null);
    const [form] = Form.useForm();


    const fetchRecipes = useCallback(async () => {
        try {
            const response = await getStepAll(id);
            setStep(response.data);
        } catch (error) {
            message.error('Failed to load recipe');
        }
    },[id]);

    useEffect(() => {
        console.log(1)
        fetchRecipes();

    }, [fetchRecipes]);

    


    const handleAddRecipe = () => {
        setEditingStep(null);
        form.resetFields()
        setIsModalVisible(true);
    };

    const handleEditRecipe = (recipe: Step) => {
        setEditingStep(recipe);
        form.setFieldsValue(recipe);
        setIsModalVisible(true);
    };

    const handleDeleteRecipe = async (ids: number) => {
        try {
            await removeStepById(ids);
            message.success('Recipe deleted successfully');
            fetchRecipes();
        } catch (error: any) {
            message.error(error);
        }
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            values.recipeId = id
            if (editingStep) {
                await updateStepById(editingStep.id, values);
                message.success('修改菜谱成功');
            } else {
                await createStep(values);
                message.success('添加菜谱成功');
            }
            fetchRecipes();
            setIsModalVisible(false);
        } catch (error: any) {
            message.error(error);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const columns = [
        { title: '步骤编码', dataIndex: 'stepNumber', key: 'stepNumber' },
        { title: '描述', dataIndex: 'description', key: 'description' },
        { title: '图片', dataIndex: 'imageUrl', key: 'imageUrl', render: (text: string) => { return text?<img src={text} alt="recipe" width={50} /> :'暂上传图片'}},
        {
            title: '操作',
            key: 'action',
            render: (_: any, record: Step) => (
                <div style={{ width: '300px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    <Button onClick={() => handleEditRecipe(record)} icon={<FormOutlined />}>修改</Button>
                    <Button onClick={() => handleDeleteRecipe(record.id)} icon={<MinusSquareOutlined />} danger>
                        删除
                    </Button>
                </div>
            ),
        },
    ];

    const getImageUrl = (url: string, forms: any) => {
        let newUrl;
        if (forms?.imageUrl) {
            newUrl = forms?.imageUrl + ',' + url
        }
        else {
            newUrl = url
        }
        form.setFieldsValue({ imageUrl: newUrl });
    }

    return (
        <div>
            {/* <h1>{recipe?.name} - Steps</h1> */}
            <Button type="primary" onClick={handleAddRecipe}>
                添加步骤
            </Button>
            <Table columns={columns} dataSource={step} rowKey="id" />
            <Modal title={editingStep ? '修改步骤' : '添加步骤'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item name="stepNumber" label="步骤编号" rules={[{ required: true }]}>
                        <Input type={'number'} />
                    </Form.Item>
                    <Form.Item name="description" label="描述" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name="imageUrl" label="图片" valuePropName="value">
                        <ImageUploader onChange={(e) => { getImageUrl(e, form) }} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default RecipeSteps;
