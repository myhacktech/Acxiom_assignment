import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { signup, login } from "../../actions/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Switch, setSwitch] = React.useState(false);
  const [role, setRole] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [vendor, setVendor] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  var variant = "outlined";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userId, password);
    dispatch(login({ email: userId, password }, navigate));
    console.log("Login button clicked");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, role, password,category);
    if (role === "Vendor") {
      dispatch(
        signup({ name, email, accountType: role, category, password }, navigate)
      );
    } else {
      dispatch(signup({ name, email, accountType: role, password }, navigate));
    }
    console.log("Register button clicked");
  };
  const handleChange = (event) => {
    setRole(event.target.value);
    if (event.target.value === "Vendor") {
      setVendor(true);
    } else {
      setVendor(false);
    }
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <div className="row" id="chooseAction">
        {Switch ? (
          <>
            <div id="login/signup">
              <Button
                variant={`${variant}`}
                onClick={() => {
                  setSwitch(false);
                  variant = "contained";
                }}
              >
                Log in
              </Button>
              &nbsp;
              <Button
                variant="contained"
                onClick={() => setSwitch(true)}
                id="userRegister"
              >
                Register
              </Button>
            </div>
          </>
        ) : (
          <>
            <div id="login/signup">
              <Button
                variant="contained"
                onClick={() => {
                  setSwitch(false);
                }}
              >
                Log in
              </Button>
              &nbsp;
              <Button variant="outlined" onClick={() => setSwitch(true)}>
                Register
              </Button>
            </div>
          </>
        )}
      </div>
      <div>
        {Switch ? (
          <>
            <div
              className="usersignup"
              id="usersignup"
              style={{ textAlign: "center" }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="role"
                  onChange={handleChange}
                >
                  <MenuItem value="Vendor">Vendor</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Name"
                name="name"
                sx={{
                  width: "100%",
                  marginBottom: (theme) => theme.spacing(2),
                }}
                variant="outlined"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                autoComplete="off"
                required
                type="email"
                label="Email"
                name="email"
                sx={{
                  marginBottom: (theme) => theme.spacing(2),
                }}
                id="registeremail"
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  className="userlogininput"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <br />
              {vendor && (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="category"
                      onChange={handleCategoryChange}
                    >
                      <MenuItem value="Catering">Catering</MenuItem>
                      <MenuItem value="Florist">Florist</MenuItem>
                      <MenuItem value="Decoration">Decoration</MenuItem>
                      <MenuItem value="Lighting">Lighting</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}

              <br />
              <Button
                variant="contained"
                onClick={handleRegister}
                id="submitLogin"
              >
                Register
              </Button>
              <Button variant="contained" id="submitLogin">
                <NavLink to="/">Cancel</NavLink>
              </Button>
            </div>
          </>
        ) : (
          <>
            <div
              className="userlogin"
              id="userlogin"
              style={{ textAlign: "center" }}
            >
              {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="role"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
              <TextField
                name="userid"
                type="text"
                label="User ID"
                variant="outlined"
                autoComplete="off"
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                id="userlogininput"
              />
              <br />
              <br />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  className="userlogininput"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <br />

              <br />
              <Button
                variant="contained"
                onClick={handleLogin}
                id="submitLogin"
              >
                Login
              </Button>
              <Button variant="contained" id="submitLogin">
                <NavLink to="/">Cancel</NavLink>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
