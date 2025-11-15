import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result);

                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                // seve profile info in the DB
                fetch('https://coffee-store-1.onrender.com/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after profile save', data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            form.reset();
                            navigate('/');
                        }
                    })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.message || 'Please check your info and try again.',
                });
            })
    }


    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className="text-5xl font-bold">Sign Up now !</h2>
                <div className="w-full max-w-6xl mb-6">
                    <p className='text-3xl font-bold font-heading'>or</p>
                    <Link
                        to="/"
                        className="text-gray-700 font-bold font-heading text-xl hover:text-black transition flex items-center gap-1"
                    >
                        <span className="text-lg">←</span> Back to home
                    </Link>
                </div>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" required />
                    <label className="label">Address</label>
                    <input type="text" name="address" className="input" placeholder="Address" required />
                    <label className="label">Phone</label>
                    <input type="text" name="phone" className="input" placeholder="Phone NUmber" required />
                    <label className="label">photo</label>
                    <input type="text" name="photo" className="input" placeholder="Photo URL" required />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp