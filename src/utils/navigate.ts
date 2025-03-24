import { useNavigate } from 'react-router-dom';

// 定义导航方法的返回类型
interface NavigationHook {
    navigateTo: (path: string) => void;
}

const useNavigation = (): NavigationHook => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

    return { navigateTo };
};

export default useNavigation;
