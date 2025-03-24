import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {createCategories,getCategoriesAll,updateCategoriesById,removeCategoriesById} from "@/api/categories"

interface Category {
    id: number;
    name: string;
}

const CategoryPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [form] = Form.useForm();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await getCategoriesAll()
            setCategories(response.data);
        } catch (error) {
            message.error('Failed to fetch categories');
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = () => {
        setEditingCategory(null);
        setIsModalVisible(true);
    };

    const handleEdit = (category: Category) => {
        setEditingCategory(category);
        form.setFieldsValue(category);
        setIsModalVisible(true);
    };

    const handleDelete = async (id: number) => {
        setLoading(true);
        try {
            await removeCategoriesById(id);
            message.success('删除分类成功！');
            fetchCategories();
        } catch (error) {
            message.error('删除分类失败！');
        } finally {
            setLoading(false);
        }
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            if (editingCategory) {
                await updateCategoriesById(editingCategory.id,values);
                message.success('修改分类成功！');
            } else {
                await createCategories( values);
                message.success('新增分类成功！');
            }
            setIsModalVisible(false);
            form.resetFields();
            fetchCategories();
        } catch (error) {
            message.error('Failed to save category');
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '分类名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: '操作',
            key: 'actions',
            render: (_: any, category: Category) => (
                <>
                    <Button type="link" onClick={() => handleEdit(category)}>
                        修改
                    </Button>
                    <Button type="link" danger onClick={() => handleDelete(category.id)}>
                        删除
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
                添加分类
            </Button>
            <Table
                columns={columns}
                dataSource={categories}
                loading={loading}
                rowKey="id"
                style={{ marginTop: 16 }}
            />
            <Modal
                title={editingCategory ? '修改分类' : '添加分类'}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="name" label="Category Name" rules={[{ required: true, message: 'Please enter category name' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CategoryPage;
