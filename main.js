import { displayPostStatistics,displayMenu, promptUser } from "./helper-functions";


async function main() {
    let running = true;
    
    while (running) {
        displayMenu();
        const choice = await promptUser('Enter your choice (1-4): ');
        
        switch (choice) {
            case '1':
                await fetchPosts();
                break;
            case '2':
                displayPostStatistics();
                break;
            case '3':
                displayApiPerformance();
                break;
            case '4':
                console.log('Goodbye!');
                running = false;
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please enter 1, 2, 3, or 4.');
        }
    }
}

// Run the application
main();