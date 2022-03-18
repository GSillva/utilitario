function maxmin (action,numbers) {
    if (action == 'minimum') {
        return Math.min(numbers [0], numbers [1], numbers [2]);
    } else if(action == 'maximum') {
        return Math.max(numbers [0], numbers [1], numbers [2]);
    } else {
        const fail = "Use another action.";
        return fail;
    }
};

export default maxmin;