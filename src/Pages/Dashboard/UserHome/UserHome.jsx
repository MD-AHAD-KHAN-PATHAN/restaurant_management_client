import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className='m-20'>
            <h3 className="text-3xl font-semibold">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h3>
        </div>
    );
};

export default UserHome;