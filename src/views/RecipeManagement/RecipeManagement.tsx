import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message, Upload } from 'antd';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';

interface Recipe {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
}

const RecipeManagement: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
    const [form] = Form.useForm();

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get('/api/recipes');
            setRecipes(response.data.data);
        } catch (error) {
            message.error('Failed to fetch recipes');
        }
    };

    const handleAddRecipe = () => {
        setEditingRecipe(null);
        setIsModalVisible(true);
    };

    const handleEditRecipe = (recipe: Recipe) => {
        setEditingRecipe(recipe);
        form.setFieldsValue(recipe);
        setIsModalVisible(true);
    };

    const handleDeleteRecipe = async (id: number) => {
        try {
            await axios.delete(`/api/recipes/${id}`);
            message.success('Recipe deleted successfully');
            fetchRecipes();
        } catch (error) {
            message.error('Failed to delete recipe');
        }
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            if (editingRecipe) {
                await axios.put(`/api/recipes/${editingRecipe.id}`, values);
                message.success('Recipe updated successfully');
            } else {
                await axios.post('/api/recipes', values);
                message.success('Recipe added successfully');
            }
            fetchRecipes();
            setIsModalVisible(false);
        } catch (error) {
            message.error('Failed to save recipe');
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        { title: 'Image', dataIndex: 'image', key: 'image', render: (text: string) => <img src={text} alt="recipe" width={50} /> },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: Recipe) => (
                <span>
                    <Button onClick={() => handleEditRecipe(record)}>Edit</Button>
                    <Button onClick={() => handleDeleteRecipe(record.id)} danger>
                        Delete
                    </Button>
                </span>
            ),
        },
    ];

    return (
        <div>
            <Button type="primary" onClick={handleAddRecipe}>
                Add Recipe
            </Button>
            <Table columns={columns} dataSource={recipes} rowKey="id" />
            <Modal title="Recipe" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="image" label="Image" valuePropName="fileList" getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}>
                        <Upload name="image" listType="picture" action="/api/upload" accept="image/*">
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default RecipeManagement;
