import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { createRecipe, getRecipeAll, updateRecipeById, removeRecipeById } from "@/api/recipes"
import { Recipe, Seasoning } from "@/utils/type"
import ImageUploader from '@/component/ImageUploader/ImageUploader';
import { FormOutlined, PlusSquareOutlined, UnorderedListOutlined, MinusSquareOutlined, TableOutlined } from '@ant-design/icons';
import useNavigation from '@/utils/navigate';

const RecipeManagement: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [seasoning, setSeasoning] = useState<Seasoning[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSeasoningOpen, setIsSeasoningOpen] = useState(true)
    const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
    const [form] = Form.useForm();
    const { navigateTo } = useNavigation();
    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await getRecipeAll()
            setRecipes(response.data);
        } catch (error: any) {
            message.error(error);
        }
    };

    const handleAddRecipe = () => {
        setEditingRecipe(null);
        form.resetFields()
        setIsModalVisible(true);
    };

    const handleEditRecipe = (recipe: Recipe) => {
        setEditingRecipe(recipe);
        form.setFieldsValue(recipe);
        setIsModalVisible(true);
    };

    const handleDeleteRecipe = async (id: number) => {
        try {
            await removeRecipeById(id);
            message.success('Recipe deleted successfully');
            fetchRecipes();
        } catch (error: any) {
            message.error(error);
        }
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            if (editingRecipe) {
                await updateRecipeById(editingRecipe.id, values);
                message.success('修改菜谱成功');
            } else {
                await createRecipe(values);
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

    const handleGoStep = (record: Recipe) => {
        navigateTo(`/layout/recipeSteps/${record.id}`)
    }

    const columns = [
        { title: '菜名', dataIndex: 'title', key: 'title' },
        { title: '描述', dataIndex: 'description', key: 'description' },
        { title: '图片', dataIndex: 'imageUrl', key: 'imageUrl', render: (text: string) => <img src={text} alt="recipe" width={50} /> },
        {
            title: '操作',
            key: 'action',
            render: (_: any, record: Recipe) => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    <Button onClick={() => handleEditRecipe(record)} icon={<FormOutlined />}>修改</Button>
                    <Button onClick={() => handleGoSeasoning(record)} icon={<TableOutlined />}>查看配料</Button>
                    <Button type='dashed' onClick={() => handleGoStep(record)} icon={<UnorderedListOutlined />}>查看步骤</Button>
                    <Button onClick={() => handleEditRecipe(record)} icon={<PlusSquareOutlined />}>添加标签</Button>
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



    const handleSeasoningCanel = () => {
        setIsSeasoningOpen(false)
    }

    const handleGoSeasoning = (record:any) => {
        setSeasoning([])
    }


    return (
        <div>
            <Button type="primary" onClick={handleAddRecipe}>
                添加菜谱
            </Button>
            <Table columns={columns} dataSource={recipes} rowKey="id" />
            {/* <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={seasoning}
                columns={seasoningColumns}
                rowClassName="editable-row"
            /> */}
            <Modal title={'配料表'} open={isSeasoningOpen} onCancel={handleSeasoningCanel}>

            </Modal>
            <Modal title={editingRecipe ? '修改菜谱' : '添加菜谱'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item name="title" label="名称" rules={[{ required: true }]}>
                        <Input />
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

export default RecipeManagement;
