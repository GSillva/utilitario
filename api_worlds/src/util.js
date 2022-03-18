function read (action, input) {

    if (action == 'lowercase'){
        const output = input.toLowerCase();
        return output;
    } else if (action == 'uppercase'){
        const output = input.toUpperCase();
        return output;
    } else {
        const output = 'Use another action.';
        return output;
    };
};

export default read;