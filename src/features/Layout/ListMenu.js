import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
export const getIcon =(icon)=>{
    switch(icon)
    {
        case 'DashboardIcon' : return (<DashboardIcon/>);
        case 'AssignmentIndIcon' : return (<AssignmentIndIcon/>);
        case 'ContactMailIcon' : return (<ContactMailIcon/>);
        default : return (<ContactMailIcon/>);
    }
}
export const menuList = [
    {
        index : 1,
        name : 'Dashboard',
        link : '/dashboard',
        icon :  "DashboardIcon"
    },
    {
        index : 2,
        name : 'Quản lý phản hồi',
        link : '/quan-ly-phan-hoi',
        icon :  "ContactMailIcon"
    },
    {
        index : 3,
        name : 'Quản lý người dùng',
        link : '/quan-ly-nguoi-dung',
        icon :  "AssignmentIndIcon"
    }
]