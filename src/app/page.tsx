import Form from "next/form";
import { actionFormLogin, addUser } from "./actionFormLogin";

export default function Home() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
                <Form
                    /* action={async (data) => {
                        "use server";
                        console.log(data);
                    }} */
                   // action={actionFormLogin}
                   action={addUser}
                   className="w-96"
                    
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      <div>
                      <label htmlFor="email" className="text-xs">Email:</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="eu@example.com.br" 
                        required 
                        className="w-full h-10 rounded-md border border-white p-2 flex items-center focus:outline-none focus:border-1 focus:border-violet-400"
                      />
                      </div>

                      <div>
                      <label htmlFor="password">Password:</label>
                      <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="**********"
                          required
                          className="w-full h-10 rounded-md border border-white p-2 flex items-center focus:outline-none focus:border-1 focus:border-violet-400"
                      />
                      </div>
                    </div>
                    <div>
                      <button 
                          type="submit"
                          className="w-full h-10 rounded-md bg-violet-700 hover:bg-violet-900 cursor-pointer"  
                        >Create User</button>
                    </div>
                  </div>
                </Form>
        </div>
    );
}
// npm install prisma --save-dev
// npx prisma init --datasource-provider postgresql --output ../generated/prisma
// npx prisma generate
