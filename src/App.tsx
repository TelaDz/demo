import React, { FC, useState } from "react";
import LoginView from "./pages/login";
import { Button } from "antd";
import "./App.css";

const View = (props: any) => {
  const [loginShow, setLoginShow] = useState(false);
  return (
    <div>
      {!loginShow ? (
        <Button
          onClick={() => {
            setLoginShow(true);
          }}
        >
          登录
        </Button>
      ) : (
        <Button
          onClick={() => {
            setLoginShow(false);
          }}
        >
          隐藏
        </Button>
      )}
      {loginShow && <LoginView></LoginView>}
    </div>
  );
};

const App: FC = () => (
  <div>
    <View></View>
  </div>
);

export default App;
