// 기능2: 공유하기
document.getElementById('shareButton').addEventListener('click', async () => {
    try {
      // Check if the Web Share API is available
      if (!navigator.share) {
        alert('Web Share API is not available on your browser.');
        return;
      }
  
      // Your share data
      const shareData = {
        title: '천방지축 어리둥절 빙글빙글 돌아가는 만2세의 일년',
        text: '들어가서 카드를 열어보세요!',
        url: window.location.href
      };
  
      // Invoke the share dialog
      await navigator.share(shareData);
      console.log('Data was shared successfully');
    } catch (err) {
      console.error('Share failed:', err.message);
    }
  });