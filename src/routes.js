import SlideShowContainer from './containers/SlideShowContainer';
import FlimScheduleContainer from './containers/FlimScheduleContainer';
import FlimDetailContainer from './containers/FlimDetailContainer';
import PageMemberContainer from './containers/PageMemberContainer';
import PageBookFlimContainer from './containers/PageBookFlimContainer';
export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <SlideShowContainer/>
    },
    {
        path: '/flimschedule',
        exact: false,
        main: () => <FlimScheduleContainer/>
    },
    {
        path: '/flimdetail',
        exact: false,
        main: () => <FlimDetailContainer/>
    },
    {
        path: '/login',
        exact: false,
        main: () => <PageMemberContainer/>
    },
    {
        path: '/booktickets',
        exact: false,
        main: () => <PageBookFlimContainer/>
    },
];