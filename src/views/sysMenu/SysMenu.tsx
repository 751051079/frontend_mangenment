import React, { useState, ChangeEvent, useEffect } from "react";
import EaskeyTable from "@/component/EaskeyTable/EaskeyTable";
import Modal from "@/component/Modal/Modal";
import EaskeyFormRadio from "@/component/Form/EaskeyFormRadio";
import EaskeyFormInput from "@/component/Form/EaskeyFormInput";
import Message, { MessagesProps } from '@/component/Message/Message';
import EaskeyPopover from "@/component/Popover/EaskeyPopover"
import IconGroup from "@/component/IconGroup/IconGroup";
import { menuAdd, menuList } from "@/api/SysMenu/index"

const SysMenu: React.FC = () => {
    let [list, setList] = useState();
    let [isShowModal, setIsShowModal] = useState(false)
    let [showModalVal, setShowModalVal] = useState('')
    const [messages, setMessages] = useState<MessagesProps[]>([]);
    const [nextId, setNextId] = useState(0);
    let [menuTypeValue, setMenuTypeValue] = useState({ value: '', key: '' })
    let [menuStatusValue, setMenuStatusValue] = useState({ value: '', key: '' })

    let [menuNameValue, setMenuNameValue] = useState('');
    let [pathValue, setPathValue] = useState('');
    let [permsValue, setPermsValue] = useState('')
    let [orderNumValue, setOrderNumValue] = useState('')
    let [iconValue, setIconValue] = useState('')

    useEffect(() => {
        // 在组件挂载后立即请求接口
        menuList().then((res) => {
            console.log(res)
            setList(res.data)
        })
    }, []);


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
            key: 'menuName',
        },
        {
            title: '排序',
            dataIndex: '2',
            key: 'orderNum',
        },
        {
            title: '请求地址',
            dataIndex: '3',
            key: 'path',
        },
        {
            title: '类型',
            dataIndex: '4',
            key: 'menuType',
            renderingMethod: (row: any) => {
                if (row.menuType === 'M') {
                    return (
                        <div className="btn glow-btn glow-btn-success F-size-12">目录</div>
                    )
                }
                else if (row.menuType === 'C') {
                    return (
                        <div className="btn glow-btn glow-btn-info F-size-12">菜单</div>
                    )
                }
                else if (row.menuType === 'F') {
                    return (
                        <div className="btn glow-btn glow-btn-warning F-size-12">按钮</div>
                    )
                }

            }
        },
        {
            title: '可见',
            dataIndex: '4',
            key: 'visible',
            renderingMethod: (row: any) => {
                if (row.visible === '1') {
                    return (
                        <div className="btn glow-btn glow-btn-success F-size-12">显示</div>
                    )
                }
            }
        },
        {
            title: '权限标识',
            dataIndex: '4',
            key: 'perms',
        },
        {
            title: '操作',
            dataIndex: '4',
            key: '',
            renderingMethod: (row: any) => {
                return (
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div className="btn glow-btn glow-btn-success F-size-12">新增</div>
                        <div className="btn glow-btn glow-btn-warning F-size-12 m-left-10">编辑</div>
                        <div className="btn glow-btn glow-btn-danger F-size-12 m-left-10">删除</div>
                    </div>
                )
            }
        }
    ]

    const setIsShowModalState = (type: string) => {
        setShowModalVal(type === 'add' ? '添加菜单' : '修改菜单')
        setIsShowModal(true)
    }

    const hanldSubmitEvent = () => {
        if (showModalVal === '添加菜单') {
            let data = {
                parentId: '',
                menuType: menuTypeValue.key,
                menuName: menuNameValue,
                url: pathValue,
                target: 'menuItem',
                perms: permsValue,
                orderNum: orderNumValue,
                icon: iconValue,
                visible: menuStatusValue.key,
                isRefresh: 0
            }
            menuAdd(data).then((res: any) => {
                if (res.code === 1) {
                    handleAddMessage(res.data, 'success')
                }
                else {
                    handleAddMessage(res.msg, 'danger')
                }
            })
        }
    }

    const hanldRadioTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            value: e.target.value,
            key: e.currentTarget.getAttribute('data-keys') || ''
        }
        setMenuTypeValue(data)
    }

    const hanldRadioStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            value: e.target.value,
            key: e.currentTarget.getAttribute('data-keys') || ''
        }
        setMenuStatusValue(data)
        console.log(data)
    }

    const HanldClickIconEvent = (e: string) => {
        setIconValue(e)
    }

    const handleAddMessage = (text: string, type: 'success' | 'danger' | 'warning' | 'info') => {
        const newMessage = { id: nextId, text, type };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setNextId((prevId) => prevId + 1);
    };

    const handleCloseMessage = (id: number) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
    };

    return (
        <div className="container-div">
            <div style={{ backgroundColor: '#fff', padding: '20px 10px', marginTop: '10px' }}>
                <div className="flex">
                    <div className="btn glow-btn glow-btn-primary" onClick={() => setIsShowModalState('add')}>新增</div>
                    <div className="btn glow-btn glow-btn-success m-left-10" onClick={() => setIsShowModalState('edit')}>修改</div>
                    <div className="btn glow-btn glow-btn-info m-left-10">展开/折叠</div>
                </div>

                <EaskeyTable style={{ marginTop: '10px' }} columns={columns} dataSource={list}></EaskeyTable>
            </div>
            <Modal isOpen={isShowModal} title={showModalVal} onClose={() => setIsShowModal(false)} onSubmit={hanldSubmitEvent}>

                <EaskeyFormRadio labelStyle={{ width: '20%', textAlign: 'right' }} title="菜单类型：" options={[{ value: '目录', key: 'M' }, { value: '菜单', key: 'C' }, { value: '按钮', key: 'F' }]} defaultValue={menuTypeValue.value} onChange={(e) => hanldRadioTypeChange(e)} />
                <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="菜单名称：" value={menuNameValue} onChange={handleMenuNameChange} />
                {['C'].includes(menuTypeValue.key) && (
                    <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="请求地址：" value={pathValue} onChange={handlePathChange} />
                )}
                {['C', 'F'].includes(menuTypeValue.key) && (
                    <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="权限标识：" value={permsValue} onChange={handlePermsChange} />
                )}
                <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="显示排序：" value={orderNumValue} onChange={handleOrderNumChange} />
                <EaskeyPopover title="点击选择图标" content={<EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="图标：" value={iconValue} onChange={() => { }} />}>
                    <div>
                        <IconGroup onClick={HanldClickIconEvent} />
                    </div>
                </EaskeyPopover>
                {['M'].includes(menuTypeValue.key) && (
                    <EaskeyFormRadio
                        labelStyle={{ width: '20%', textAlign: 'right' }}
                        title="菜单状态："
                        options={[{ value: '显示', key: '1' }, { value: '隐藏', key: '0' }]}
                        defaultValue={menuStatusValue.value}
                        onChange={(e) => hanldRadioStatusChange(e)}
                    />
                )}
            </Modal>
            {messages && <Message message={messages} onClose={handleCloseMessage} />}
        </div>
    )
}

export default SysMenu;