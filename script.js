// アニメーションの一時停止/再開機能
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const computedStyle = window.getComputedStyle(this);
        const animationPlayState = computedStyle.getPropertyValue('animation-play-state');
        
        if (animationPlayState === 'running') {
            this.style.animationPlayState = 'paused';
        } else {
            this.style.animationPlayState = 'running';
        }
    });
}); 