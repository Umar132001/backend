import catchAsync from "../utils/catchAsync.js";

export const getMe = catchAsync(async (req, res) => {
  const user = req.user;

  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});
