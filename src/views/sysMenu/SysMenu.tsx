import React, { useState, ChangeEvent } from "react";
import EaskeyTable from "@/component/EaskeyTable/EaskeyTable";
import Modal from "@/component/Modal/Modal";
import EaskeyFormRadio from "@/component/Form/EaskeyFormRadio";
import EaskeyFormInput from "@/component/Form/EaskeyFormInput";


const SysMenu: React.FC = () => {
    let [isShowModal, setIsShowModal] = useState(false)
    let [showModalVal, setShowModalVal] = useState('')
    let [menuTypeValue, setMenuTypeValue] = useState({ value: '', key: '' })
    let [menuNameValue, setMenuNameValue] = useState('');
    let [pathValue, setPathValue] = useState('');
    let [permsValue, setPermsValue] = useState('')
    let [orderNumValue, setOrderNumValue] = useState('')

    const handleMenuNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMenuNameValue(event.target.value);
    };
    const handlePermsChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPermsValue(event.target.value);
    };
    const handlePathChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPathValue(event.target.value);
    };
    const handleOrderNumChange = (event: ChangeEvent<HTMLInputElement>) => {
        setOrderNumValue(event.target.value);
    };

    let columns = [
        {
            title: '菜单名称',
            dataIndex: '1',
            key: 'naem',
        },
        {
            title: '排序',
            dataIndex: '2',
            key: 'sort',
        },
        {
            title: '请求地址',
            dataIndex: '3',
            key: 'path',
        },
        {
            title: '类型',
            dataIndex: '4',
            key: 'type',
        }
    ]

    const setIsShowModalState = (type: string) => {
        if (type === 'add') {



        }
        else {

        }
        setShowModalVal(type === 'add' ? '添加菜单' : '修改菜单')
        setIsShowModal(true)
    }

    const hanldRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            value: e.target.value,
            key: e.currentTarget.getAttribute('data-keys') || ''
        }
        setMenuTypeValue(data)
        console.log(data)
    }

    return (
        <div className="container-div">
            <div style={{ backgroundColor: '#fff', padding: '20px 10px', marginTop: '10px' }}>
                <div className="flex">
                    <div className="btn glow-btn glow-btn-primary" onClick={() => setIsShowModalState('add')}>新增</div>
                    <div className="btn glow-btn glow-btn-success m-left-10" onClick={() => setIsShowModalState('edit')}>修改</div>
                    <div className="btn glow-btn glow-btn-info m-left-10">展开/折叠</div>
                </div>

                <EaskeyTable style={{ marginTop: '10px' }} columns={columns} dataSource={[]}></EaskeyTable>
            </div>
            <Modal isOpen={isShowModal} title={showModalVal} onClose={() => setIsShowModal(false)}>

                <EaskeyFormRadio labelStyle={{ width: '20%', textAlign: 'right' }} title="菜单类型：" options={[{ value: '目录', key: 'M' }, { value: '菜单', key: 'C' }, { value: '按钮', key: 'F' }]} defaultValue={menuTypeValue.value} onChange={(e) => hanldRadioChange(e)} />
                <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="菜单名称：" value={menuNameValue} onChange={handleMenuNameChange} />
                <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="请求地址：" value={pathValue} onChange={handlePathChange} />
                <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="权限标识：" value={permsValue} onChange={handlePermsChange} />
                <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="显示排序：" value={orderNumValue} onChange={handleOrderNumChange} />
            </Modal>
        </div>
    )
}

export default SysMenu;