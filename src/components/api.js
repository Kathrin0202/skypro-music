export async function getPlaylist() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  ).catch((error) => {
    throw new Error("Не удалось загрузить плейлист, попробуйте позже");
  });

  const data = await response.json();
  return data;
}

export async function loginUser({ email, password }) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 401) {
    throw new Error("Пользователь с таким email или паролем не найден");
  } else if (response.status === 500) {
    throw new Error("Сервер сломался");
  }
  const data = await response.json();
  return data;
}

export async function registerUser({ email, password }) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    throw new Error("Такой пользователь уже существует");
  } else if (response.status === 500) {
    throw new Error("Сервер сломался");
  }
  const data = await response.json();
  return data;
}
