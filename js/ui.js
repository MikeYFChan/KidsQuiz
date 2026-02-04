// UI Helper Functions

let toastContainer = null;

function getToastContainer() {
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(toastContainer);
    }
    return toastContainer;
}

export function showToast(message, type = 'info', duration = 4000) {
    const container = getToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        background: ${type === 'error' ? '#e74c3c' : type === 'success' ? '#37af65' : '#4a90e2'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        font-size: 14px;
        max-width: 300px;
        animation: toastSlideIn 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    const icon = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes toastSlideIn {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes toastSlideOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100px); }
        }
    `;
    if (!document.head.querySelector('#toast-styles')) {
        style.id = 'toast-styles';
        document.head.appendChild(style);
    }
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

export function showConfirmDialog(message, onConfirm, onCancel) {
    if (confirm(message)) {
        onConfirm?.();
    } else {
        onCancel?.();
    }
}

export function showLoadingState(element, isLoading) {
    if (element) {
        element.disabled = isLoading;
        if (isLoading) {
            element.dataset.originalText = element.textContent;
            element.textContent = 'Loading...';
        } else if (element.dataset.originalText) {
            element.textContent = element.dataset.originalText;
        }
    }
}
