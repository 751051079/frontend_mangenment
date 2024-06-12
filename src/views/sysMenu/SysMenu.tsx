import React, { useState, ChangeEvent, useEffect } from "react";
import EaskeyTable from "@/component/EaskeyTable/EaskeyTable";
import Modal from "@/component/Modal/Modal";
import EaskeyFormRadio from "@/component/Form/EaskeyFormRadio";
import EaskeyFormInput from "@/component/Form/EaskeyFormInput";
import Message, { MessagesProps } from '@/component/Message/Message';
import EaskeyPopover from "@/component/Popover/EaskeyPopover"
import IconGroup from "@/component/IconGroup/IconGroup";
import { menuAdd, menuList, menuEdit } from "@/api/SysMenu/index"
import { handleTree, TreeProps } from '@/utils/index'
import EaskeySelect from "@/component/Form/EaskeySelect";
import {
    isVisibleOptions,
    // isYseNoOptions,
    isCacheOptions,
    isYseNoSelects,
    isStatusOptions,
    isMenuTypeOptions
} from '@/utils/data'



const SysMenu: React.FC = () => {
    const [list, setList] = useState<TreeProps<any>[]>([]);
    const [isShowModal, setIsShowModal] = useState(false)
    const [showModalVal, setShowModalVal] = useState('')
    const [messages, setMessages] = useState<MessagesProps[]>([]);
    const [nextId, setNextId] = useState(0);
    const [menuTypeValue, setMenuTypeValue] = useState({ value: '', key: '' })
    const [menuStatusValue, setMenuStatusValue] = useState({ value: '', key: '' })
    const [menuIsCache, setmMnuIsCache] = useState({ value: '', key: '' })
    const [isVisible, setIsVisible] = useState({ value: '', key: '' })

    const [componentValue, setComponentValue] = useState('')
    const [queryValue, setQueryValue] = useState('')
    const [menuNameValue, setMenuNameValue] = useState('');
    const [pathValue, setPathValue] = useState('');
    const [permsValue, setPermsValue] = useState('')
    const [orderNumValue, setOrderNumValue] = useState('')
    const [iconValue, setIconValue] = useState('')
    const [expandedAll, setExpandedAll] = useState(false);
    const [targetValue, setTargetValue] = useState('');
    const [parentIdValue, setParentIdValue] = useState('');
    const [id,setId] = useState('')
    useEffect(() => {
        // 在组件挂载后立即请求接口
        menuList().then((res) => {

            const menu = handleTree(res.data)
            setList(menu)
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
    const handleComponentChange = (event: ChangeEvent<HTMLInputElement>) => {
        setComponentValue(event.target.value);
    };
    const handleQueryVChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQueryValue(event.target.value);
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
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="btn glow-btn glow-btn-success F-size-12">新增</div>
                        <div className="btn glow-btn glow-btn-warning F-size-12 m-left-10" onClick={() => setIsShowModalState('edit', row)}>编辑</div>
                        <div className="btn glow-btn glow-btn-danger F-size-12 m-left-10">删除</div>
                    </div>
                )
            }
        }
    ]

    const setIsShowModalState = (type: string, row?: any) => {
        if (type === 'add') {
            setParentIdValue('')
            setId('')
        }
        else {
            const foundMenuType = isMenuTypeOptions.find(item => item.key === row.menuType);
            const foundMenuStatus = isStatusOptions.find(item => item.key === row.status)
            const foundIsVisible = isVisibleOptions.find(item => item.key === row.visible)
            const foundTargetValue = isYseNoSelects.find(item => item.value === String(row.isFrame))
            const foundIsCache = isCacheOptions.find(item => item.key === row.isCache)
            setId(row.id)
            setMenuNameValue(row.menuName)
            setMenuTypeValue(foundMenuType || { value: '', key: '' })
            setPathValue(row.path)
            setPermsValue(row.perms)
            setComponentValue(row.component)
            setQueryValue(row.query)
            setmMnuIsCache(foundIsCache || { value: '', key: '' })
            setOrderNumValue(row.orderNum)
            setIconValue(row.icon)
            setTargetValue(foundTargetValue?.value || '')
            setMenuStatusValue(foundMenuStatus || { value: '', key: '' })
            setIsVisible(foundIsVisible || { value: '', key: '' })
        }
        setShowModalVal(type === 'add' ? '添加菜单' : '修改菜单')
        setIsShowModal(true)
    }

    const hanldSubmitEvent = () => {
        let data = {
            id:id,
            parentId: parentIdValue,
            menuType: menuTypeValue.key,
            menuName: menuNameValue,
            path: pathValue,
            isFrame: targetValue,
            perms: permsValue,
            orderNum: orderNumValue,
            icon: iconValue,
            query: queryValue,
            status: menuStatusValue.key,
            visible: isVisible.key,
            isCache: menuIsCache.key
        }
        if (showModalVal === '添加菜单') {
            menuAdd(data).then((res: any) => {
                if (res.code === 1) {
                    handleAddMessage(res.data, 'success')
                }
                else {
                    handleAddMessage(res.msg, 'danger')
                }
            })
        }
        else {
            menuEdit(data).then((res: any) => {
                if (res.code === 1) {
                    handleAddMessage(res.data, 'success')
                }
                else {
                    handleAddMessage(res.msg, 'danger')
                }
            })
        }
        setIsShowModal(false)
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

    const hanldIsVisibleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            value: e.target.value,
            key: e.currentTarget.getAttribute('data-keys') || ''
        }
        setIsVisible(data)
        console.log(data)
    }
    const hanldMnuIsCacheChange = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            value: e.target.value,
            key: e.currentTarget.getAttribute('data-keys') || ''
        }
        setmMnuIsCache(data)
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
    const handleToggleAll = () => {
        setExpandedAll(!expandedAll);
    };

    const handleTargetValue = (option: any) => {
        console.log(option)
        setTargetValue(option.value)
    }

    return (
        <div className="container-div">
            <div style={{ backgroundColor: '#fff', padding: '20px 10px', marginTop: '10px' }}>
                <div className="flex">
                    <div className="btn glow-btn glow-btn-primary" onClick={() => setIsShowModalState('add')}>新增</div>
                    <div className="btn glow-btn glow-btn-success m-left-10" onClick={() => setIsShowModalState('edit')}>修改</div>
                    <div className="btn glow-btn glow-btn-info m-left-10" onClick={handleToggleAll}>{expandedAll ? '一键折叠' : '一键展开'}</div>
                </div>

                <EaskeyTable style={{ marginTop: '10px' }} columns={columns} expandedAll={expandedAll} onToggleAll={handleToggleAll} dataSource={list}></EaskeyTable>
            </div>
            <Modal isOpen={isShowModal} title={showModalVal} onClose={() => setIsShowModal(false)} onSubmit={hanldSubmitEvent}>

                <EaskeyFormRadio labelStyle={{ width: '20%', textAlign: 'right' }} title="菜单类型：" options={isMenuTypeOptions} defaultValue={menuTypeValue.value} onChange={(e) => hanldRadioTypeChange(e)} />
                <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="菜单名称：" value={menuNameValue} onChange={handleMenuNameChange} />
                {['C', 'M'].includes(menuTypeValue.key) && (
                    <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="路由地址：" value={pathValue} onChange={handlePathChange} />
                )}
                {['C', 'M'].includes(menuTypeValue.key) && (
                    <EaskeySelect lable={'是否外链：'} options={isYseNoSelects} defaultValue={targetValue} onChange={handleTargetValue}></EaskeySelect>
                )}
                {['C', 'F'].includes(menuTypeValue.key) && (
                    <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="权限字符：" value={permsValue} onChange={handlePermsChange} />
                )}
                {['C'].includes(menuTypeValue.key) && (
                    <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="组件地址：" value={componentValue} onChange={handleComponentChange} />
                )}
                {['C'].includes(menuTypeValue.key) && (
                    <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="路由参数：" value={queryValue} onChange={handleQueryVChange} />
                )}
                <EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="显示排序：" value={orderNumValue} onChange={handleOrderNumChange} />
                <EaskeyPopover title="点击选择图标" content={<EaskeyFormInput labelStyle={{ width: '20%', textAlign: 'right' }} label="图标：" value={iconValue} onChange={() => { }} />}>
                    <div>
                        <IconGroup onClick={HanldClickIconEvent} />
                    </div>
                </EaskeyPopover>

                {['M', 'C'].includes(menuTypeValue.key) && (
                    <EaskeyFormRadio
                        labelStyle={{ width: '20%', textAlign: 'right' }}
                        title="显示状态："
                        options={isVisibleOptions}
                        defaultValue={isVisible.value}
                        onChange={(e) => hanldIsVisibleChange(e)}
                    />
                )}
                {['C'].includes(menuTypeValue.key) && (
                    <EaskeyFormRadio
                        labelStyle={{ width: '20%', textAlign: 'right' }}
                        title="是否缓存："
                        options={isCacheOptions}
                        defaultValue={menuStatusValue.value}
                        onChange={(e) => hanldMnuIsCacheChange(e)}
                    />
                )}
                {['M', 'C', 'F'].includes(menuTypeValue.key) && (
                    <EaskeyFormRadio
                        labelStyle={{ width: '20%', textAlign: 'right' }}
                        title="菜单状态："
                        options={isStatusOptions}
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