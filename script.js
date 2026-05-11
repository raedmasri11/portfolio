/* ===============================
   EDIT YOUR PORTFOLIO HERE
   Replace titles, links, thumbnails,
   and descriptions with your real work.
================================= */
/*
const videos = [
  {
    title: "High-Retention Product Ad",
    year: "2025",
    category: "Short-Form Ad",
    description:
      "A fast-paced product ad edit with hook-first structure, clean captions, punchy sound effects, and motion designed for paid social.",
    tags: ["Captions", "Sound Design", "Fast Cuts", "Motion"],
    thumbnail: "assets/thumbs/product-ad.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "YouTube Talking Head Edit",
    year: "2025",
    category: "YouTube Edit",
    description:
      "A clean long-form edit with jump cuts, b-roll placement, audio cleanup, zooms, visual rhythm, and retention-focused pacing.",
    tags: ["YouTube", "B-Roll", "Audio Cleanup", "Pacing"],
    thumbnail: "assets/thumbs/youtube-edit.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Cinematic Reel Edit",
    year: "2025",
    category: "Reel / TikTok",
    description:
      "A cinematic vertical edit with music syncing, color grade, smooth transitions, atmospheric sound, and polished visual flow.",
    tags: ["Color Grade", "Transitions", "Music Sync", "Reels"],
    thumbnail: "assets/thumbs/cinematic-reel.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Podcast Clip Edit",
    year: "2025",
    category: "Social Clip",
    description:
      "A short podcast clip edited for social media with subtitles, cutdowns, punch-in zooms, cleanup, and a clear opening hook.",
    tags: ["Podcast", "Subtitles", "Cutdowns", "Social"],
    thumbnail: "assets/thumbs/podcast-clip.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
*/
const videos = [
  {
    title: "High-Retention Product Ad",
    year: "2025",
    category: "Short-Form Ad",
    description:
      "Fast-paced ad edit with captions, punchy sound, and motion.",
    tags: ["Captions", "Sound Design", "Fast Cuts"],
    // Either a YouTube embed:
    // videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    // OR a self-hosted video
    videoFile: "assets/videos/product-ad.mp4",
    thumbnail: "assets/thumbs/product-ad.svg"
  },
  {
    title: "YouTube Talking Head Edit",
    year: "2025",
    category: "YouTube Edit",
    description:
      "Long-form YouTube edit with jump cuts, b-roll, zooms.",
    tags: ["YouTube", "B-Roll", "Audio Cleanup"],
    videoFile: "assets/videos/youtube-edit.mp4",
    thumbnail: "assets/thumbs/youtube-edit.svg"
  }
];
const videoGrid = document.querySelector("#videoGrid");
const modal = document.querySelector("#videoModal");
const videoFrame = document.querySelector("#videoFrame");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");



/*
function createVideoCard(video, index) {
  const article = document.createElement("article");
  article.className = "video-card reveal";

  article.innerHTML = `
    <div class="video-thumb" data-video="${video.videoUrl}" role="button" tabindex="0" aria-label="Play ${video.title}">
      <img src="${video.thumbnail}" alt="${video.title} thumbnail" />
      <button class="play-btn" type="button">▶</button>
    </div>

    <div class="video-info">
      <div class="video-meta">
        <span>${video.category}</span>
        <span>${video.year}</span>
      </div>

      <h3>${video.title}</h3>
      <p>${video.description}</p>

      <div class="video-tags">
        ${video.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>

      <button class="btn btn-secondary watch-link" data-video="${video.videoUrl}" type="button">
        Watch Edit
      </button>
    </div>
  `;

  return article;
}
*/
function createVideoCard(video) {
  const article = document.createElement("article");
  article.className = "video-card reveal";

  const videoThumbContent = video.videoFile
    ? `<video muted loop poster="${video.thumbnail}" class="video-thumb-video">
         <source src="${video.videoFile}" type="video/mp4" />
       </video>`
    : `<img src="${video.thumbnail}" alt="${video.title} thumbnail" />`;

  article.innerHTML = `
    <div class="video-thumb" data-video="${video.videoUrl || video.videoFile}" role="button" tabindex="0" aria-label="Play ${video.title}">
      ${videoThumbContent}
      <button class="play-btn" type="button">▶</button>
    </div>

    <div class="video-info">
      <div class="video-meta">
        <span>${video.category}</span>
        <span>${video.year}</span>
      </div>

      <h3>${video.title}</h3>
      <p>${video.description}</p>

      <div class="video-tags">
        ${video.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>

      <button class="btn btn-secondary watch-link" data-video="${video.videoUrl || video.videoFile}" type="button">
        Watch Edit
      </button>
    </div>
  `;

  return article;
}
videos.forEach((video, index) => {
  videoGrid.appendChild(createVideoCard(video, index));
});
/*
function openModal(videoUrl) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const autoplayUrl = videoUrl.includes("?")
    ? `${videoUrl}&autoplay=1`
    : `${videoUrl}?autoplay=1`;

  videoFrame.src = autoplayUrl;
}
*/
function openModal(src) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (src.endsWith(".mp4") || src.endsWith(".webm")) {
    videoFrame.innerHTML = `<video controls autoplay style="width:100%;height:100%;border-radius:inherit;">
                              <source src="${src}" type="video/mp4"/>
                            </video>`;
  } else {
    // YouTube / Vimeo embed
    const autoplayUrl = src.includes("?") ? `${src}&autoplay=1` : `${src}?autoplay=1`;
    videoFrame.innerHTML = `<iframe src="${autoplayUrl}" title="Video player" allowfullscreen allow="autoplay"></iframe>`;
  }
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  videoFrame.src = "";
}

document.addEventListener("click", event => {
  const videoTrigger = event.target.closest("[data-video]");
  if (videoTrigger) {
    openModal(videoTrigger.dataset.video);
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();

  if (event.key === "Enter") {
    const focusedVideo = document.activeElement.closest?.("[data-video]");
    if (focusedVideo) openModal(focusedVideo.dataset.video);
  }
});

closeButtons.forEach(button => button.addEventListener("click", closeModal));


navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector("#year").textContent = new Date().getFullYear();

/* Reveal on scroll */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

reveals.forEach(element => observer.observe(element));


