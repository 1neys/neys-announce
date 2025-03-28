let notificationCount = 0;
const maxNotifications = 3; 

function createToast(serverName, author, message) {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
        <div class="toast-body">
            <i class="fas fa-exclamation-triangle warning-icon"></i>
            <div>
                <span class="server-name">${serverName} ${author}:</span>
                <span class="announcement-text">${message}</span>
            </div>
        </div>
    `;
    return toast;
}

function removeToast(toast) {
    toast.classList.add('animate-out');
    setTimeout(() => {
        toast.remove();
        notificationCount--;
    }, 500);
}

window.addEventListener('message', function(event) {
    if (event.data.type === "announcement") {
        const container = document.getElementById('toastContainer');

        if (notificationCount >= maxNotifications) {
            const oldestToast = container.firstChild;
            removeToast(oldestToast);
        }

        const toast = createToast(
            event.data.serverName,
            event.data.author,
            event.data.message
        );

        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('animate-in');
        }, 100);

        notificationCount++;

        setTimeout(() => {
            removeToast(toast);
        }, event.data.timeout);
    }
});