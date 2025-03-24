import React, { useState, useEffect, useCallback } from 'react';
import { Upload, UploadFile } from 'antd';
import CONFIG from '@/utils/config';
import axios from 'axios';

interface ImageUploaderProps {
    value?: string;
    onChange?: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ value, onChange }) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleChange = (info: any) => {
        if (info.file.status === 'done') {
            onChange?.(info.file.response.url); // 假设服务器返回的图片 URL 在 response.url 中
        }
    };

    const setFileListFunc = useCallback((values: string | undefined) => {
        if (!values) return;

        const files: UploadFile[] = values.split(",").map((url, index) => ({
            uid: index.toString(),
            name: 'default.png',
            status: 'done',
            url,
        }));

        setFileList(files);
    }, []);

    useEffect(() => {
        setFileListFunc(value);
    }, [value, setFileListFunc]);

    const customRequest = async (options: any) => {
        const { file, onError, onSuccess } = options;
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(`${CONFIG.BASE_URL}/api/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            onSuccess(response.data.data); // 触发成功回调并传递响应数据
            onChange?.(response.data.data);

            setFileList(prevFileList => [
                ...prevFileList,
                {
                    uid: fileList.length.toString(),
                    name: 'default.png',
                    status: 'done',
                    url: response.data.data,
                },
            ]);
            // 使用函数式更新文件列表
        } catch (err) {
            console.error('Upload failed:', err);
            onError(err); // 触发失败回调并传递错误对象
        }
    };

    return (
        <Upload
            name="file"
            listType="picture-card"
            customRequest={customRequest}
            accept="image/*"
            fileList={fileList}
            onChange={handleChange}
            showUploadList={true}
        >
            +
        </Upload>
    );
};

export default ImageUploader;
