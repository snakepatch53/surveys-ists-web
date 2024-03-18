import _provincias from "../mocks/provincias.json";
import _cantones from "../mocks/cantones.json";
import _parroquias from "../mocks/parroquias.json";
import { useState } from "react";

export default function useLocationSelects() {
    const [parroquias, setParroquias] = useState([]);
    const [cantones, setCantones] = useState([]);

    const handleChangeProvincia = (action) => (e) => {
        const provinciaSelected = e.target.value;
        const new_cantones = _cantones.filter(
            (p) => p.value.substring(0, provinciaSelected.length) === provinciaSelected
        );
        setCantones(new_cantones);
        setParroquias([]);
        action(e);
    };

    const handleChangeCanton = (action) => (e) => {
        const cantonSelected = e.target.value;
        const new_parroquias = _parroquias.filter(
            (p) => p.value.substring(0, cantonSelected.length) === cantonSelected
        );
        setParroquias(new_parroquias);
        action(e);
    };
    return {
        provincias: _provincias,
        cantones,
        parroquias,
        handleChangeProvincia,
        handleChangeCanton,
    };
}
