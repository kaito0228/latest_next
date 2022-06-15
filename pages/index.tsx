import styles from '../styles/Home.module.css'
import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const StyledSelect = styled(Select)({
  backgroundColor: 'lightgrey',
  width: '300px',
  padding: 8,
  borderRadius: 4,
  '& > .MuiSvgIcon-root': {
    fontSize: '100px',
    right: '100px'
  },
});

const StyledSelect2 = styled(Select)({
  backgroundColor: 'lightgrey',
  width: '300px',
  padding: 8,
  borderRadius: 4,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>

      <main className={styles.main}>
        <StyledSelect>
          <MenuItem value={"test"}>Test</MenuItem>
          <MenuItem value={"test2"}>Test2</MenuItem>
        </StyledSelect>
        <StyledSelect2>
          <MenuItem value={"test"}>Test</MenuItem>
          <MenuItem value={"test2"}>Test2</MenuItem>
        </StyledSelect2>
      </main>

      <Footer></Footer>
    </div>
  )
}
