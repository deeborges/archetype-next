import withAuth from 'components/PrivateRoute';

const MyPage = () => <> My private page</>;

export default withAuth(MyPage);
