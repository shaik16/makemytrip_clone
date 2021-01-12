import Joi from 'joi';

const Validator = (obj) => {
	return new Promise((resolve, reject) => {
		const schema = Joi.object({
			name: Joi.string().min(4),
			email: Joi.string().email({
				minDomainSegments: 2,
				tlds: { allow: ['com', 'net', 'tech', 'io'] },
			}),
			password: Joi.string().min(7),
			confirmPassword: Joi.string()
				.equal(Joi.ref('password'))
				.options({
					messages: {
						'any.only': '{{#label}} does not match',
					},
				}),
		});

		const result = schema.validate(obj);
		if (result.error) {
			return resolve(result.error.details[0].message);
		}
		return resolve('success');
	});
};

export default Validator;
