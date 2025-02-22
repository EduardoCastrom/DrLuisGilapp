import React, { useState } from "react";
import { Card, CardContent } from "./Components/ui/Card";
import { Button } from "./Components/ui/Button";
import { Input } from "./Components/ui/Input";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "./Components/ui/Table";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      onLogin(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <Input placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin} className="mt-2">Iniciar Sesión</Button>
    </div>
  );
};

const Menu = ({ onSelect }) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold mb-4">Menú Principal</h1>
      <Button onClick={() => onSelect("registro")}>Registro Nuevo Paciente</Button>
      <Button onClick={() => onSelect("lista")} className="mt-2">Lista de Pacientes</Button>
    </div>
  );
};

const RegistroPaciente = ({ onBack, onRegister }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [diagnostico, setDiagnostico] = useState("");

  const handleRegister = () => {
    onRegister({ nombre, apellido, edad, genero, diagnostico });
    setNombre("");
    setApellido("");
    setEdad("");
    setGenero("");
    setDiagnostico("");
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold mb-4">Registro de Nuevo Paciente</h1>
      <Input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <Input placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <Input type="number" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <Input placeholder="Género" value={genero} onChange={(e) => setGenero(e.target.value)} />
      <Input placeholder="Diagnóstico" value={diagnostico} onChange={(e) => setDiagnostico(e.target.value)} />
      <Button onClick={handleRegister} className="mt-2">Registrar</Button>
      <Button onClick={onBack} className="mt-2">Volver al Menú</Button>
    </div>
  );
};

const ListaPacientes = ({ pacientes, onBack }) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold mb-4">Lista de Pacientes</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Género</TableCell>
            <TableCell>Diagnóstico</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pacientes.map((paciente, index) => (
            <TableRow key={index}>
              <TableCell>{paciente.nombre}</TableCell>
              <TableCell>{paciente.apellido}</TableCell>
              <TableCell>{paciente.edad}</TableCell>
              <TableCell>{paciente.genero}</TableCell>
              <TableCell>{paciente.diagnostico}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="mt-4">Total de pacientes registrados: {pacientes.length}</p>
      <Button onClick={onBack} className="mt-2">Volver al Menú</Button>
    </div>
  );
};

const SprintPlanning = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [menuOption, setMenuOption] = useState(null);
  const [pacientes, setPacientes] = useState([]);

  if (!authenticated) {
    return <Login onLogin={setAuthenticated} />;
  }

  if (!menuOption) {
    return <Menu onSelect={setMenuOption} />;
  }

  return (
    <div className="p-6 flex flex-col items-center justify-center h-screen">
      {menuOption === "registro" && <RegistroPaciente onBack={() => setMenuOption(null)} onRegister={(p) => setPacientes([...pacientes, p])} />}
      {menuOption === "lista" && <ListaPacientes pacientes={pacientes} onBack={() => setMenuOption(null)} />}
      {menuOption !== "registro" && <Button onClick={() => setMenuOption(null)}>Volver al Menú</Button>}
    </div>
  );
};

export default SprintPlanning;

