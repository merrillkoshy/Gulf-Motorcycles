import React, { useState } from "react";

import { useRouter } from "next/router";
import firebase from "../../lib/firebaseConfig";

export default function Page() {
  let logo = "/images/logo-light.png";
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
          router.push("/admin/dashboard");
        } else {
          alert("You are not Authorized to enter this page");
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErrorMsg(errorCode, errorMessage);
      });
  };
  return (
    <>
      <>
        <section className="admin-login ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-5">
                <div className="login-form">
                  <div className="logo-container row justify-content-center align-items-center">
                    <img src={logo} />
                  </div>
                  <div className="form-container">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Username"
                              value={email}
                              onChange={(e) => {
                                e.preventDefault();
                                setEmail(e.currentTarget.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="password"
                              value={password}
                              className="form-control"
                              placeholder="Password"
                              onChange={(e) => {
                                e.preventDefault();
                                setPassWord(e.currentTarget.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="w-100 row justify-content-center align-items-center">
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                        </div>
                      </div>
                      {errorMsg && <p className="error">{errorMsg}</p>}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
// import React, { useState } from "react";
// import { signIn, signOut, useSession } from "next-auth/client";
// import { useRouter } from "next/router";

// const LoginBody = () => {
//   let logo = "/images/logo-light.png";
//   const router = useRouter();

//   const [username, setUsername] = useState(null);
//   const [password, setPassWord] = useState(null);
//   const [session, loading] = useSession();

//   const loginWithCreds = () => {
//     username == "gmcuser" && password == "gmcuser"
//       ? router.push("/admin/dashboard")
//       : null;
//   };
//   return (
//     <>
//       {!session ? (
//         <>
//           <section className="admin-login ptb-100">
//             <div className="container">
//               <div className="row h-100 justify-content-center align-items-center">
//                 <div className="col-5">
//                   <div className="login-form">
//                     <div className="logo-container row justify-content-center align-items-center">
//                       <img src={logo} />
//                     </div>
//                     <div className="form-container">
//                       <form>
//                         <div className="row">
//                           <div className="col-lg-12">
//                             <div className="form-group">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Username"
//                                 onChange={(e) => {
//                                   e.preventDefault();
//                                   setUsername(e.currentTarget.value);
//                                 }}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-lg-12">
//                             <div className="form-group">
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 placeholder="Password"
//                                 onChange={(e) => {
//                                   e.preventDefault();
//                                   setPassWord(e.currentTarget.value);
//                                 }}
//                               />
//                             </div>
//                           </div>

//                           <div className="w-100 row justify-content-center align-items-center">
//                             <button
//                               type="submit"
//                               className="btn btn-primary"
//                               onClick={(e) => {
//                                 e.preventDefault();
//                                 signIn;
//                               }}
//                             >
//                               Login
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </>
//       ) : (
//         router.push("/admin/dashboard")
//       )}
//     </>
//   );
// };

// export default LoginBody;
