import React, { useState } from "react";
import EaskeyTable from "@/component/EaskeyTable/EaskeyTable";
import Modal from "@/component/Modal/Modal";
import EaskeyFormRadio from "@/component/Form/EaskeyFormRadio";


const SysMenu: React.FC = () => {
    let [isShowModal,setIsShowModal] = useState(false)
    let [showModalVal,setShowModalVal] = useState('')
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

    const setIsShowModalState = (type:string)=>{
        if(type==='add'){


                
        }
        else{

        }
        setShowModalVal(type==='add'?'添加菜单':'修改菜单')
        setIsShowModal(true)
    }

    const hanldRadioChange=(e:object)=>{
        console.log(e)
    }

    return (
        <div className="container-div">
            <div style={{ backgroundColor: '#fff', padding: '20px 10px',marginTop:'10px' }}>
                <div className="flex">
                    <div className="btn glow-btn glow-btn-primary" onClick={()=>setIsShowModalState('add')}>新增</div>   
                    <div className="btn glow-btn glow-btn-success m-left-10" onClick={()=>setIsShowModalState('edit')}>修改</div>
                    <div className="btn glow-btn glow-btn-info m-left-10">展开/折叠</div>
                </div>
                
                <EaskeyTable style={{marginTop:'10px'}} columns={columns} dataSource={[]}></EaskeyTable>
            </div>
            <Modal isOpen={isShowModal} title={showModalVal} onClose={()=>setIsShowModal(false)}>
                
                <EaskeyFormRadio title="菜单类型：" options={[{value:'目录'},{value:'菜单'},{value:'按钮'}]} defaultValue={'目录'} onChange={(e)=>hanldRadioChange(e)} />
            </Modal>
        </div>
    )
}

export default SysMenu;