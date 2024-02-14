// "use client";
// import React from 'react'
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaTwitter,
// } from "react-icons/fa";
// import AnimationWrapper from './animation-wrapper';

// const socialIcons = [
//   {
//     id: "facebook",
//     icon: (
//       <FaFacebookF
//         color="rgba(13, 183, 96, 1)"
//         className="w-[40px] h-[40px] "
//       />
//     ),
//   },
//   {
//     id: "twitter",
//     icon: (
//       <FaTwitter color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " />
//     ),
//   },
//   {
//     id: "linkedin",
//     icon: (
//       <FaLinkedinIn
//         color="rgba(13, 183, 96, 1)"
//         className="w-[40px] h-[40px] "
//       />
//     ),
//   },
//   {
//     id: "instagram",
//     icon: (
//       <FaInstagram
//         color="rgba(13, 183, 96, 1)"
//         className="w-[40px] h-[40px] "
//       />
//     ),
//   },
// ];
// export default function SocialLinks  ()  {
//   return (
//     <div>
//          <AnimationWrapper>
//              <motion.div className="flex gap-3 cursor-pointer">
//                             {socialIcons.map((item) => (
//                                 <motion.div
//                                     key={item.id}
//                                     initial={{ scale: 0 }}
//                                     animate={{ rotate: 360, scale: 1 }}
//                                     transition={{
//                                         type: "spring",
//                                         damping: 20,
//                                         stiffness: 80,
//                                         duration: 4,
//                                     }}
//                                     whileHover={{ scale: 1.2, rotate: 360 }}
//                                     whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
//                                 >
//                                     {item.icon}
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//             </AnimationWrapper>
//     </div>
//   )
// }

 