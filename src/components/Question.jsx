import { faCheck, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";

export function QuestionText({
    name,
    label,
    placeholder,
    value = "",
    error = null,
    touched = false,
    as = "text",
    onChange = () => {},
    onBlur = () => {},
}) {
    return (
        <Wrapper label={label} error={error} touched={touched}>
            <input
                type={as}
                className={cls(
                    "border border-black/20 rounded-md p-2 w-full placeholder-primary placeholder-opacity-50 outline-none text-center",
                    {
                        "border-red-500": touched && error,
                        "border-green-500": touched && !error,
                    }
                )}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </Wrapper>
    );
}

export function QuestionSelect({
    name,
    label,
    placeholder,
    options = [],
    disabled = false,
    value = "",
    error = null,
    touched = false,
    onChange = () => {},
    onBlur = () => {},
}) {
    return (
        <Wrapper label={label} error={error} touched={touched}>
            <select
                name={name}
                className={cls(
                    "border border-black/20 rounded-md p-2 w-full outline-none text-center",
                    {
                        "border-red-500": touched && error,
                    }
                )}
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            >
                <option value="">{placeholder}</option>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </Wrapper>
    );
}

export function QuestionRadio({
    name,
    label,
    options = [],
    disabled = false,
    value = "",
    error = null,
    touched = false,
    onChange = () => {},
    onBlur = () => {},
    classWrapperSelect = "",
}) {
    return (
        <Wrapper label={label} error={error} touched={touched}>
            <div
                className={cls(
                    "flex bg-white rounded-md overflow-hidden border border-black/20",
                    classWrapperSelect,
                    {
                        "border-red-500": touched && error,
                        "border-green-500": touched && !error,
                    }
                )}
            >
                {options.map(({ value: _value, label }) => (
                    <label
                        key={_value}
                        className="flex-1 flex items-center h-10 cursor-pointer px-1"
                    >
                        <input
                            type="radio"
                            name={name}
                            value={_value}
                            disabled={disabled}
                            checked={_value === value}
                            onChange={onChange}
                            onBlur={onBlur}
                            className="hidden [&:checked~div]:opacity-100 [&:checked~div]:bg-gray-200/90 [&:checked~div>svg]:opacity-100"
                        />
                        <div className="flex justify-center items-center gap-2 w-full h-full opacity-80 transition">
                            <span className="block max-w-[80%] text-nowrap overflow-hidden text-ellipsis">
                                {label}
                            </span>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-sm opacity-0 transition text-green-600"
                            />
                        </div>
                    </label>
                ))}
            </div>
        </Wrapper>
    );
}

export function Button({ load = false }) {
    return (
        <button
            type="submit"
            className={cls(
                "bg-primary text-white rounded-md p-2 w-full mt-2 text-xl flex items-center justify-center gap-2 shadow-xl hover:bg-primary/80 transition-all duration-300",
                {
                    "bg-gray-500 hover:bg-gray-500/80": load,
                }
            )}
            disabled={load}
        >
            <h3>{load ? "Enviando..." : "Enviar"}</h3>
            {load ? (
                <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
                <FontAwesomeIcon icon={faPaperPlane} />
            )}
        </button>
    );
}

// internal functions
function Wrapper({ children, className = "", label, error, touched }) {
    return (
        <div className={cls("flex flex-col w-full", className)}>
            <Label text={label} />
            {children}
            <p className="min-h-5 text-sm text-center text-red-500">
                {touched && error ? error : null}
            </p>
        </div>
    );
}

function Label({ text }) {
    return <h3 className="font-content text-primary text-center mb-1">{text}</h3>;
}
