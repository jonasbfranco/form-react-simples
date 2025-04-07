"use server";

import { PrismaClient } from "../../generated/prisma";



export default async function actionFormLogin(formData: FormData) {
    // forma 1
    const data = Object.fromEntries(formData);
    console.log(data);
     // forma 2
    let email = formData.get('email');
    let password = formData.get('password');
    console.log("Form:\n E-mail: " + email + "\n Password: " + password);

};


export const addUser = async (formData: FormData) => {
	let email = formData.get('email');
    let password = formData.get('password');
    console.log("Form:\n E-mail: " + email + "\n Password: " + password);

    

	const prisma = new PrismaClient()
	try {
		await prisma.user.create({
			data: {
				email: email.toString(),
				password: password.toString(),
			}
		});
	}
	catch (error) {
		console.error(error);
	}
	finally {
		await prisma.$disconnect();
	}

};