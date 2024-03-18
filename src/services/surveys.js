import { fetchAdapter } from "./api.js";

const resource = "surveys";

function mapNames(data) {
    return data;
}

export async function get() {
    const response = await fetchAdapter({
        resource,
        // printResponse: true,
    });
    return mapNames(response);
}

export async function show({ id }) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        // printResponse: true,
    });
    const data = response;
    return response ? data : false;
}

export async function storage({ data }) {
    const response = await fetchAdapter({
        resource: resource,
        data: { data },
        method: "POST",
        all: true,
        // formData: true,
    });
    return response;
}

export async function update({ id, data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        data,
        method: "POST",
        all: true,
        formData: true,
        printResponse: true,
    });
    return response;
}

export async function destroy({ id, data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        data,
        method: "DELETE",
        all: true,
    });
    return response;
}
