import { Button, Stack } from "@mui/material";
import styles from "./HelloWorld.module.scss";

const HelloWorld = () => {
  return (
    <div className={styles.HelloWorld}>
      <Stack spacing={2}>
         HelloWorld Components
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

HelloWorld.propTypes = {};

HelloWorld.defaultProps = {};
export default HelloWorld;