import {Observable} from 'data/observable';

export class HelloWorldModel extends Observable {
	public message: string;

	constructor() {
		super();

		let user = {
			email: 'rob@gmx.com',
			password: 'abc123',
		}

		console.log("================")
		global.tnsconsole.log('user', user)
		global.tnsconsole.info('user.email', user.email)
		global.tnsconsole.warn('user.password', user.password)
		global.tnsconsole.error('user.email', user.email, 'user.password', user.password)
		global.tnsconsole.error('user', user)
		console.log("================")

	}
}