function createSkeletonCard() {
    const skeletonCard = document.createElement('div');
    skeletonCard.classList.add('skeleton');
    skeletonCard.classList.add('card');

    const skeletonCardContent = `
    <div class="card-img"></div>
    <div class="card-text__skeleton">
      <div class="skeleton-text-country"></div>
      <div class="skeleton-text"></div>
    </div>
    `
    skeletonCard.innerHTML += skeletonCardContent
  
  
    return skeletonCard;
  }