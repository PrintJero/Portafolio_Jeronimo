import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import Actividad from "./Actividad";

export type Actividad = {
    id: number;
    descripcion: string;
    completado: boolean;
}

export default function Actividades() {
    // Hooks y estado dentro del componente
    const [actividades, setActividades] = useState([
        {id: 1, descripcion: '1a. Cátedra de Ingeniería', completado: true},
        {id: 2, descripcion: 'Plática de Servicio Social', completado: false},
        {id: 3, descripcion: 'Baja de Materias AGO-DIC 2025', completado: false},
        {id: 4, descripcion: 'Fiesta de Halloween', completado: false},
        {id: 5, descripcion: 'Intercambio de Regalos', completado: false}
    ]);

    const [descripcion, setDescripcion] = useState('');


    // Método para agregar actividades
    function agregarActividad() {
        const nuevaActividad = { id: Date.now(), descripcion, completado: false };
        setActividades([...actividades, nuevaActividad]);
        setDescripcion('');
    }

    // Método para borrar actividad
    function borrarActividad(id: number) {
        setActividades(actividades.filter(act => act.id !== id));
    }

    // Método para completar actividad
    function completarActividad(id: number) {
        setActividades(actividades.map(act =>
            act.id === id ? { ...act, completado: !act.completado } : act
        ));
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Agenda Universitaria</Text>
            <View style={styles.inputRow}>
                <TextInput
                    value={descripcion}
                    onChangeText={setDescripcion}
                    placeholder="Nueva actividad"
                    style={styles.input}
                    placeholderTextColor="#888"
                />
                <Button title="Agregar" color="#388e3c" onPress={agregarActividad}/>
            </View>
            <Text style={styles.subtitle}>Lista de Actividades</Text>
            <ScrollView style={styles.list}>
                {actividades.map(actividad => (
                    <Actividad
                        key={actividad.id}
                        actividad={actividad}
                        borrarActividad={borrarActividad}
                        completarActividad={completarActividad}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 22,
        color: '#fff',
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '600',
        textAlign: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#bbb',
    },
    list: {
        flex: 1,
        marginBottom: 10,
    },
});
