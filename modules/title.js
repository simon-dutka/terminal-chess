import figlet from 'figlet';
import center from 'center-align';

const title = () => {
    figlet('Terminal Chess', (err, title) => {
        if (err) {
            console.log('Something went wrong...');
            return;
        }
        console.log(center(title, process.stdout.columns));
    });
};

export default title;
