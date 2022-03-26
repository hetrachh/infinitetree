const data = {
    '/root' : {
        path: '/root',
        isMainNode: true,
        type: 'folder',
        children: ['/root/application', '/root/documents']
    },
    '/root/application' : {
        path: '/root/application',
        type: 'folder',
        children: ['/root/calander']
    },
    '/root/application/calander': {
        path: '/root/application',
        type: 'folder',
        children: ['']
    },
    '/root/documents': {
        path: '/root/documents',
        type: 'folder',
        children: ['/root/documents/OSS', '/root/documents/MUI']
    },
    '/root/documents/OSS': {
        path: '/root/documents/OSS',
        type: 'folder',
        children: []
    },
    '/root/documents/MUI': {
        path: '/root/documents/MUI',
        type: 'folder',
        children: ['/root/documents/MUI/MUI1']
    },
    '/root/documents/MUI/MUI1': {
        path: '/root/documents/MUI/MUI1',
        type: 'folder',
        children: ['/root/documents/MUI/MUI1/MUI2']
    },
    '/root/documents/MUI/MUI1/MUI2' : {
        path: '/root/documents/MUI/MUI1/MUI2',
        type: 'folder',
        children: []
    }
}
export default  data