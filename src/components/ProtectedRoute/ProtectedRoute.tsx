/**
 * @component
 * Компонент-ProtectedRoute
 * Содержит функции редактирование и удаления поста
 * Если idMe (мой id в localStorage) !== authorId, то я не могу удалять и редактировать пост
 * @props
 * children - Страница Роута
 * path - роут
 * exact - строгое сравнение path и location.pathname
 * @returns
 * возвращает ProtectedRoute - если пользователь не вошел, перенаправляет на роут /login
 */

import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { IProtectedRoute } from "../../types/types";

export const ProtectedRoute: FC<IProtectedRoute> = ({
  children,
  path,
  exact,
}) => {
  return (
    <Route
      path={`${path}`}
      exact
      render={({ location }) =>
        window.localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
