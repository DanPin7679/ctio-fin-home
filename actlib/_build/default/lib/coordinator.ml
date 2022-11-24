(*let rec test_fn (x:int): (Yojson.Basic.t list) =
  match x with
  | 99 -> []
  | _ -> `Int x :: (test_fn (x + 1))
*)

type finParam = Val of float | Sal of float | Cot of float
type product = { id : int; values : finParam list; cots : finParam list }
type finInfo = { sals : finParam list }

let rec ml_to_yojson (l : finParam list) : Yojson.Basic.t list =
  match l with
  | [] -> []
  | Sal h :: t -> `Float h :: ml_to_yojson t
  | Cot h :: t -> `Float h :: ml_to_yojson t
  | Val h :: t -> `Float h :: ml_to_yojson t

let rec age_proj (x : int) : Yojson.Basic.t list =
  match x with 99 -> [ `Int 99 ] | x -> `Int x :: age_proj (x + 1)

let rec sal_proj (sal : float) (ages : Yojson.Basic.t list) : finParam list =
  match ages with [] -> [] | _ :: tl -> Sal sal :: sal_proj sal tl

let rec cot_proj (cot_rate : int) (sals : Yojson.Basic.t list) :
    Yojson.Basic.t list =
  match sals with
  | [] -> []
  | `Int hd :: tl -> `Int (hd * cot_rate / 100) :: cot_proj cot_rate tl
  | _ -> failwith "error"

let rec spend_proj (cots : Yojson.Basic.t list) (sals : Yojson.Basic.t list) :
    Yojson.Basic.t list =
  match (cots, sals) with
  | [], [] -> []
  | `Int hdc :: tlc, `Int hds :: tls -> `Int (hds - hdc) :: spend_proj tlc tls
  | _ -> failwith "error"

let rec asset_proj (cots : Yojson.Basic.t list) (asset : int) :
    Yojson.Basic.t list =
  match cots with
  | [] -> []
  | `Int hd :: tl -> `Int (asset + hd) :: asset_proj tl (asset + hd)
  | _ -> failwith "error"
