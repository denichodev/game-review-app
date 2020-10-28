CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.game (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    description text,
    cover_url text
);
CREATE TABLE public.game_genre (
    game_id integer NOT NULL,
    genre_id integer NOT NULL
);
CREATE SEQUENCE public.game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.game_id_seq OWNED BY public.game.id;
CREATE TABLE public.genre (
    id integer NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.genre_id_seq OWNED BY public.genre.id;
CREATE TABLE public.review (
    id integer NOT NULL,
    user_id integer NOT NULL,
    game_id integer NOT NULL,
    title text NOT NULL,
    comment text NOT NULL,
    score integer NOT NULL
);
CREATE SEQUENCE public.review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.review_id_seq OWNED BY public.review.id;
CREATE TABLE public."user" (
    id integer NOT NULL,
    username text NOT NULL,
    name text NOT NULL,
    avatar_url text
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public.game ALTER COLUMN id SET DEFAULT nextval('public.game_id_seq'::regclass);
ALTER TABLE ONLY public.genre ALTER COLUMN id SET DEFAULT nextval('public.genre_id_seq'::regclass);
ALTER TABLE ONLY public.review ALTER COLUMN id SET DEFAULT nextval('public.review_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.game_genre
    ADD CONSTRAINT game_genre_pkey PRIMARY KEY (game_id, genre_id);
ALTER TABLE ONLY public.game
    ADD CONSTRAINT game_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_game_updated_at BEFORE UPDATE ON public.game FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_game_updated_at ON public.game IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.game_genre
    ADD CONSTRAINT game_genre_game_id_fkey FOREIGN KEY (game_id) REFERENCES public.game(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.game_genre
    ADD CONSTRAINT game_genre_genre_id_fkey FOREIGN KEY (genre_id) REFERENCES public.genre(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_game_id_fkey FOREIGN KEY (game_id) REFERENCES public.game(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
