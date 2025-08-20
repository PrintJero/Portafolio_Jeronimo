import { View, Button, Text, StyleSheet } from 'react-native';
import { Actividad as ActividadType } from './Actividades';

type ActividadProps = {
    actividad: ActividadType;
    borrarActividad: (id: number) => void;
    completarActividad: (id: number) => void;
};

export default function Actividad({ actividad, borrarActividad, completarActividad }: ActividadProps) {
    return (
        <View style={styles.card}>
            <Text style={[styles.text, actividad.completado && styles.completed]}>
                {actividad.descripcion}
            </Text>
            <View style={styles.buttonRow}>
                <Button
                    title={actividad.completado ? 'Completado' : 'Sin completar'}
                    color={actividad.completado ? '#388e3c' : '#fbc02d'}
                    onPress={() => completarActividad(actividad.id)}
                />
                <Button
                    title="Eliminar"
                    color="#d32f2f"
                    onPress={() => borrarActividad(actividad.id)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    text: {
        fontSize: 18,
        color: '#333',
        marginBottom: 8,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
});