PGDMP     "                    x         	   servicedb    12.3    12.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            !           1262    16393 	   servicedb    DATABASE     �   CREATE DATABASE servicedb WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE servicedb;
                postgres    false            �            1259    16416    bookings    TABLE     �   CREATE TABLE public.bookings (
    bookingid integer NOT NULL,
    vehicleid integer NOT NULL,
    clientid integer NOT NULL,
    notes character varying(25),
    bookingdate timestamp without time zone DEFAULT CURRENT_DATE NOT NULL
);
    DROP TABLE public.bookings;
       public         heap    postgres    false            �            1259    16414    bookings_booking_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bookings_booking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.bookings_booking_id_seq;
       public          postgres    false    205            "           0    0    bookings_booking_id_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public.bookings_booking_id_seq OWNED BY public.bookings.bookingid;
          public          postgres    false    204            �            1259    16424    clients    TABLE     k   CREATE TABLE public.clients (
    clientid integer NOT NULL,
    clientfirstname character varying(250)
);
    DROP TABLE public.clients;
       public         heap    postgres    false            �            1259    16422    clients_client_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.clients_client_id_seq;
       public          postgres    false    207            #           0    0    clients_client_id_seq    SEQUENCE OWNED BY     N   ALTER SEQUENCE public.clients_client_id_seq OWNED BY public.clients.clientid;
          public          postgres    false    206            �            1259    16396    vehicles    TABLE     �   CREATE TABLE public.vehicles (
    vehicleid integer NOT NULL,
    model character varying(50) NOT NULL,
    createdon timestamp without time zone DEFAULT CURRENT_DATE
);
    DROP TABLE public.vehicles;
       public         heap    postgres    false            �            1259    16394    vechiles_vechile_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vechiles_vechile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.vechiles_vechile_id_seq;
       public          postgres    false    203            $           0    0    vechiles_vechile_id_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public.vechiles_vechile_id_seq OWNED BY public.vehicles.vehicleid;
          public          postgres    false    202            �
           2604    16419    bookings bookingid    DEFAULT     y   ALTER TABLE ONLY public.bookings ALTER COLUMN bookingid SET DEFAULT nextval('public.bookings_booking_id_seq'::regclass);
 A   ALTER TABLE public.bookings ALTER COLUMN bookingid DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    16427    clients clientid    DEFAULT     u   ALTER TABLE ONLY public.clients ALTER COLUMN clientid SET DEFAULT nextval('public.clients_client_id_seq'::regclass);
 ?   ALTER TABLE public.clients ALTER COLUMN clientid DROP DEFAULT;
       public          postgres    false    207    206    207            �
           2604    16399    vehicles vehicleid    DEFAULT     y   ALTER TABLE ONLY public.vehicles ALTER COLUMN vehicleid SET DEFAULT nextval('public.vechiles_vechile_id_seq'::regclass);
 A   ALTER TABLE public.vehicles ALTER COLUMN vehicleid DROP DEFAULT;
       public          postgres    false    202    203    203                      0    16416    bookings 
   TABLE DATA           V   COPY public.bookings (bookingid, vehicleid, clientid, notes, bookingdate) FROM stdin;
    public          postgres    false    205                    0    16424    clients 
   TABLE DATA           <   COPY public.clients (clientid, clientfirstname) FROM stdin;
    public          postgres    false    207   (                 0    16396    vehicles 
   TABLE DATA           ?   COPY public.vehicles (vehicleid, model, createdon) FROM stdin;
    public          postgres    false    203   �       %           0    0    bookings_booking_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.bookings_booking_id_seq', 16, true);
          public          postgres    false    204            &           0    0    clients_client_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.clients_client_id_seq', 5, true);
          public          postgres    false    206            '           0    0    vechiles_vechile_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.vechiles_vechile_id_seq', 11, true);
          public          postgres    false    202            �
           2606    16421    bookings bookings_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (bookingid);
 @   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_pkey;
       public            postgres    false    205            �
           2606    16429    clients clients_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (clientid);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            postgres    false    207            �
           2606    16403    vehicles vechiles_model_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vechiles_model_key UNIQUE (model);
 E   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT vechiles_model_key;
       public            postgres    false    203            �
           2606    16401    vehicles vechiles_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vechiles_pkey PRIMARY KEY (vehicleid);
 @   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT vechiles_pkey;
       public            postgres    false    203                  x�u��J1�����4��9\V�B��&���$���޴�۲����f�&��G�P�� +0+�W�K����k�]�v���S���^�W�.<���VkDMU�$Y�0��4M�ʃ�F:�!խG�m�Cl�9������\h圥���u_갬�NjP�4����}ZnP����K�	�R�6�c��LK��Cэ|>��qI�4gr��"�^q��)�1>b?��/{Qz�&�Ah�h�c�8���v�         ^   x���	�0 �s2E&�-���xIm��!��}��5_�Ei�Bl`�ĳ	R������H[.;�٢3��s���,�&6���xV��1�J         y   x�3����KI�4202�50�54P00�#.cN����R&�n��%X�L9sҰh��_�_�]Ҝ��7���ojQrjJj1ViKΰ��������<�
8=*K����.m�靉�M1z\\\ _=7     