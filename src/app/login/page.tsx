"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px"
};

const page: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateAccount = () => {
    alert("hello world!");
  };

  return (
    <div className="bg-[#f0f2f5]">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:mt-0 mt-20 min-h-screen max-w-6xl mx-auto">
        <div>
          <h1 className="text-blue-500 md:text-7xl text-5xl font-bold">
            facebook
          </h1>
          <p className="md:text-3xl text-xl mt-5">
            Facebook helps you connect and share <br />
            with the people in your life.
          </p>
        </div>

        <div>
          <div className="w-full max-w-md p-6 pt-3 m-auto mx-auto bg-white rounded-lg shadow-md">
            <form className="mt-2">
              <div>
                <input
                  type="email"
                  className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address or phone number"
                />
              </div>

              <div className="mt-4">
                <input
                  type="password"
                  className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>

              <div className="mt-6">
                <button
                  className="w-full px-6 py-2.5 md:text-xl text-lg font-bold tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 "
                >
                  Log in
                </button>
              </div>
            </form>

            <div className="text-center">
              <a
                href="#"
                className="md:text-sm text-xs text-center mx-auto text-blue-500 pt-4 block hover:underline"
              >
                Forgotten password?
              </a>
            </div>
            <div className="border-b-2 mt-5"></div>
            <div className="mt-6 text-center">

              <div>
                <button
                  className="px-6 py-2.5 md:text-lg mx-auto text-base font-semibold tracking-wide text-white transition-colors duration-300 transform bg-[#42b72a] rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  onClick={handleOpen}
                >
                  Create new account
                </button>
                <Modal
                  className="rounded-lg"
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      sx={{fontWeight: 600}}
                      variant="h4"
                      component="h2"
                    >
                      Sign Up
                    </Typography>
                    <Typography id="modal-mod
                    al-description" sx={{ mt: 0 }}>
                      It&apos;s quick and easy.
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>

          <div>
            <p className="md:text-sm font-light text-xs text-center pt-7">
              <span className="font-semibold">Create a Page</span> for a
              celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
