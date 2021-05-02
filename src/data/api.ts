import ENV from 'env.json';
type apiParams = string | number;

export const __APIPath = {
    verifyEmail: '/user/email-verify',
    user: {
        signup: '/user/auth/registration/',
        login: '/user/auth/login/',
        find: '/user/find/username/',
        offline: '/user/relations/offline_followings/',
        online: '/user/relations/online_followings/'
    },
    groups: {
        index: '/groups/',
        top: '/group/top_groups/',
        my:'/group/joined_groups/',

    },
};
