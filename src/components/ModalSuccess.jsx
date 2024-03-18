import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfettiExplosion from "react-confetti-explosion";
import { motion } from "framer-motion";

export default function ModalSuccess() {
    return (
        <>
            <div className="fixed inset-0">
                <ConfettiExplosion force={0.8} duration={3000} particleCount={300} width="1600" />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex justify-center items-center bg-black/40"
            >
                <div className="flex flex-col gap-2 bg-white py-16 px-10 rounded-lg shadow-xl">
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 text-6xl mb-5"
                    />
                    <h1 className="text-2xl font-bold text-center">
                        ¡Gracias por tu colaboración!
                    </h1>
                    <p className="text-gray-500 text-center">
                        Tu información ha sido enviada con éxito.
                    </p>
                </div>
            </motion.div>
        </>
    );
}
