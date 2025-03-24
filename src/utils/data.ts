interface EaskeySelectOption {
    value: string;
    label: string;
}
export const isVisibleOptions = [
    { value: '显示', key: '0' },
    { value: '隐藏', key: '1' }
]

export const isStatusOptions = [
    { value: '正常', key: '0' },
    { value: '停用', key: '1' }
]

export const isYseNoOptions = [
    { value: '是', key: '0' },
    { value: '否', key: '1' }
]

export const isYseNoSelects:EaskeySelectOption[] = [
    { value: '0', label: '是' },
    { value: '1', label: '否' }
]

export const isCacheOptions = [
    { value: '缓存', key: '0' },
    { value: '不缓存', key: '1' }
]

export const isMenuTypeOptions = [
    { value: '目录', key: 'M' },
    { value: '菜单', key: 'C' },
    { value: '按钮', key: 'F' }
]

