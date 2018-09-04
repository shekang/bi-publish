module.exports = {
	db:"mongodb://app_admin:123mutouren@127.0.0.1:27017/app",
	defaultPort: 3456,
	staticVirtualPath: '/static',
	staticRealPath: '/home/shekang/workplace/bi-update',
	zipReturn: 'diff', // full 全量
	SSH_CONFIG:{
	  host: '10.1.1.165',
	  port: 22,
	  username: 'shekang',
	  password: '123mutouren'
	}
}