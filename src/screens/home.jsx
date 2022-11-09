import { Button, Grid, TextField } from "@mui/material";
import { StyleSheet, Text, View } from "react-native";

export const home = () => (
  <View>
    <Text style={styles.tittle}>Digite seu nome:</Text>
    <Text style={styles.text}>o nome aparecerá no seu perfil</Text>
    <View style={styles.div}>
      <Grid style={styles.grid} container spacing={-1}>
        <Grid xs={6}>
          <TextField
            style={styles.input}
            id="standard-basic"
            label="Nome"
            variant="filled"
          />
        </Grid>
        <Grid>
          <TextField
            style={styles.input}
            id="outlined-basic"
            label="Sobrenome"
            variant="filled"
          />
        </Grid>
      </Grid>
    </View>
    <View style={styles.div}>
      <Button style={styles.botao} variant="contained">
        Enviar
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  tittle: {
    textAlign: "center",
    margin: 24,
    fontSize: "20px",
    marginTop: 200,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    opacity: "50%",
  },
  input: {
    display: "flex",
    padding: 0,
    width: 150,
  },
  div: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth:"768px",
    margin: "auto",
  },
  grid: {
    alignItems: "center",
    margin: 50,
    justifyContent: "center",
  },
  botao: {
    width: "20rem",
  },
});
